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
