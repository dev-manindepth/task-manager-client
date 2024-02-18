import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../button/Button';
import Input from '../../input/Input';
import './TaskInputForm.scss';
import { useDispatch } from 'react-redux';
import { createNewTask } from '../../../redux/api/task';

const TaskInputForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(createNewTask({ title, description, completed }) as any);
    } finally {
      setTitle('');
      setDescription('');
      setCompleted(false);
    }
  };

  return (
    <div className="task-input">
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className="task-input-form"
      >
        <div className="task-input-form-group">
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            name="title"
            type="text"
            className="title"
            value={title}
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>

        <div className="task-input-form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="description"
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
          ></textarea>
        </div>

        <div
          className="task-input-form-group"
          style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
        >
          <Input
            id="completed"
            name="completed"
            type="checkbox"
            className="title"
            value={completed}
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCompleted(e.target.checked)
            }
          />
          <label htmlFor="completed">Completed</label>
        </div>

        <Button
          label="Create Task"
          type="submit"
          disabled={!title || !description}
          className="button"
        />
      </form>
    </div>
  );
};

export default TaskInputForm;
