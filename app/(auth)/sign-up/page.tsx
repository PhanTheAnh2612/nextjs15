"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        email: "",
        password: "",
        username: "",
        name: "",
      }}
      onSubmit={(values) => {
        Promise.resolve({ success: true, data: values });
      }}
    />
  );
};

export default SignUp;
