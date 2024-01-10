export interface EventTypes {
  title: string;
  image: string;
  date: string;
  description: string;
  id: string;
}

export interface EventFormProps {
  method: string;
  event: React.FormEvent<HTMLFormElement>;
}

export interface EventListLoaderReturnType {
  events: EventTypes[];
  isError?: boolean;
  message?: string;
}
