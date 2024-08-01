"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../writing/writing.module.scss";
import Input from "../../components/input/input";
import backIcon from "../../../../public/back.svg";
import { addLetter } from "../../firestoreService";
export interface HookFormTypes {
  id: string;
  nickname: string;
  title: string;
  reason: string;
  createdAt: string;
}
export default function Writing() {
  const [nickname, setNickname] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const router = useRouter();
  const nicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    setValue("nickname", value);
  };
  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    setValue("title", value);
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HookFormTypes>();

  const onSubmit: SubmitHandler<HookFormTypes> = async (data) => {
    try {
      //현재 시간 생성
      const currentTime = new Date().toISOString();
      //data객체에 createdAt속성 추가
      const updatedData = { ...data, createdAt: currentTime };
      const docId = await addLetter(updatedData);
      alert(
        `닉네임: ${updatedData.nickname} 제목: ${updatedData.title} 이유: ${updatedData.reason}`
      );
      router.push("/visitor");
    } catch (error) {
      console.log("An error occurred while submitting the letter", error);
    }
  };

  return (
    <form className={styles.writingWrapper} onSubmit={handleSubmit(onSubmit)}>
      <Link href="/visitor">
        <button className={styles.backBtn}>
          <Image src={backIcon} alt="뒤로가기 아이콘" />
        </button>
      </Link>

      <div className={styles.formArea}>
        <Input
          type="text"
          id="nickname"
          label="닉네임"
          placeholder="당신의 닉네임을 적어주세요"
          value={nickname}
          className={errors.nickname ? styles.errorInput : styles.nickname}
          {...register("nickname", { required: "닉네임은 필수 입력입니다." })}
          onChange={nicknameChange}
        />
        <small>{errors.nickname?.message}</small>
      </div>

      <div className={styles.formArea}>
        <Input
          type="text"
          id="title"
          label="제목"
          placeholder="전소은을 다섯 글자로 표현한다면?"
          value={title}
          className={errors.title ? styles.errorInput : styles.title}
          {...register("title", {
            required: "제목은 필수 입력입니다.",
            maxLength: { value: 5, message: "5글자로 써주셔야합니다." },
            minLength: { value: 5, message: "5글자로 써주셔야합니다." },
          })}
          onChange={titleChange}
        />
        {errors.title && <small>{errors.title.message}</small>}
      </div>

      <div className={styles.formArea}>
        <label className={styles.reasonLabel}>이유</label>
        <textarea
          id="reason"
          placeholder="그렇게 생각한 이유는?"
          className={errors.reason ? styles.errorReason : styles.reason}
          {...register("reason", { required: "이유는 필수 입력입니다." })}
        />
        <small>{errors.reason?.message}</small>
      </div>

      <div className={styles.buttons}>
        <button className={styles.registration} type="submit">
          등록
        </button>

        <Link href="/visitor">
          <button className={styles.cancel}>취소</button>
        </Link>
      </div>
    </form>
  );
}
