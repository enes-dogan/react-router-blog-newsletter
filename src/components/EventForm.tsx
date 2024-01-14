import { Form, useNavigate, useNavigation } from 'react-router-dom';
import { EventFormProps } from '../types.ts';

export default function EventForm({ event, error }: EventFormProps) {
  const navigate = useNavigate();
  const navigation = useNavigation();

  console.log(error);

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  const defaultValues = {
    title: '',
    image: '',
    date: '',
    description: '',
  };

  if (event) {
    defaultValues.title = event.title;
    defaultValues.image = event.image;
    defaultValues.date = event.date;
    defaultValues.description = event.description;
  }

  const hasError = {
    title: false,
    image: false,
    date: false,
    description: false,
  };

  if (error?.message) {
    hasError.title = error.errors.title ? true : false;
    hasError.image = error.errors.image ? true : false;
    hasError.date = error.errors.date ? true : false;
    hasError.description = error.errors.description ? true : false;
  }

  return (
    <Form method="POST" className="event-form-form">
      <p>
        <label className={hasError.title ? 'error' : ''} htmlFor="title">
          {hasError.title ? error?.errors.title : 'Title'}
        </label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={defaultValues.title}
        />
      </p>
      <p>
        <label className={hasError.image ? 'error' : ''} htmlFor="image">
          {hasError.image ? error?.errors.image : 'Image'}
        </label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={defaultValues.image}
        />
      </p>
      <p>
        <label className={hasError.date ? 'error' : ''} htmlFor="date">
          {hasError.date ? error?.errors.date : 'Date'}
        </label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={defaultValues.date}
        />
      </p>
      <p>
        <label
          className={hasError.description ? 'error' : ''}
          htmlFor="description"
        >
          {hasError.description ? error?.errors.description : 'Description'}
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          defaultValue={defaultValues.description}
        />
      </p>
      <div className="event-form-actions">
        <p className="error">{error?.message && error.message}</p>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}
