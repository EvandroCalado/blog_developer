export type ExampleProps = {
  children?: React.ReactNode;
};

export default function Example({ children = 'Example' }: ExampleProps) {
  return (
    <div>
      <h1 className="text-3xl underline ">{children}</h1>
    </div>
  );
}
