import { ComponentProps, PropsWithChildren } from "react";


type FormProps = ComponentProps<"form"> &
  PropsWithChildren & {
    headingText: string;
  };
export default function Form({
  headingText,
  children,
  ...formProps
}: FormProps) {
  return (
    <form {...formProps}>
      <div className="bg-white p-8 rounded-md">
        <header className="text-center text-2xl mb-8 uppercase font-semibold text-indigo-light">
          <h2>{headingText}</h2>
        </header>
        {children}
      </div>
    </form>
  );
}
