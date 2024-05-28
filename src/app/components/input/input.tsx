import styles from"./input.module.scss";
// import { forwardRef } from "react";
interface InputProps{
  label:string;
  className?:string;
  placeholder:string;
  type?:string;
  value?: string;
  id:string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({label,className,placeholder,type, id, value,onChange,...props}:InputProps){
  return(
    <div className={styles.inputWrapper}>
    <label className={styles.label}htmlFor='title'>{label}</label>
    <input className={`${styles.className} ${className}`}
    placeholder={placeholder}
    value={value}
    type={type}
    id={id}
    onChange={onChange}
    {...props}
    />
    </div>
  )
}