export default function FadeInUp(props: {
  delay: number;
  children: React.ReactNode | string;
  disabled?: boolean;
}) {
  return props.disabled ? (
    props.children
  ) : (
    <div
      className="animate__animated animate__fadeInUp"
      style={{ animationDelay: `${props.delay}s` }}
    >
      {props.children}
    </div>
  );
}
