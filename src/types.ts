import { ActionFunction, Params } from 'react-router-dom';

export interface EventTypes {
  get(arg0: string): unknown;
  title: string;
  image: string;
  date: string;
  description: string;
  id: string;
}

export interface EventFormProps {
  method: 'POST' | 'PATCH';
  event?: EventTypes;
}

export interface PageContentProps {
  title: string;
  children: React.ReactNode;
}

export interface EventDetailLoaderParams {
  params: Params<string>;
}

export type formEventActionFn = ActionFunction<formEventActionParams>;
interface formEventActionParams {
  request: {
    method: string;
    formData: () => Promise<EventTypes>;
  };
  params: Params<string>;
}

export interface DeleteEventActionParams {
  request: {
    method: string;
  };
  params: Params<string>;
}

export interface deleteEventInputError {
  message: string;
  errors: EventTypes;
}
