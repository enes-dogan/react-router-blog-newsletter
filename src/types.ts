export interface EventTypes {
  get(arg0: string): unknown;
  title: string;
  image: string;
  date: string;
  description: string;
  id: string;
}

export interface EventFormProps {
  method?: string;
  event?: EventTypes;
  error: deleteEventActionError | undefined;
}

export interface PageContentProps {
  title: string;
  children: React.ReactNode;
}

import { Params } from 'react-router-dom';
export interface EventDetailLoaderParams {
  params: Params<string>;
}

interface ActionFunctionArgs<T> {
  request: {
    formData: () => Promise<T>;
  };
}
export type NewEventLoaderActionParams = ActionFunctionArgs<FormData>;

export interface DeleteEventActionParams {
  request: {
    method: string;
  };
  params: Params<string>;
}

export interface deleteEventActionError {
  message: string;
  errors: EventTypes;
}
