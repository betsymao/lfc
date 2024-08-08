import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

type Inputs = {
  first: string;
  last: string;
  email: string;
  mobile: number;
  message: string;
};

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.first} className="contact__form-group">
        <FormLabel htmlFor="first" className="contact__form-label">
          First name
        </FormLabel>
        <Input
          className="contact__form-input"
          id="first"
          type="text"
          placeholder="John"
          {...register("first", { required: "This field is required." })}
        />
        <FormErrorMessage>
          {errors.first && errors.first.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.last} className="contact__form-group">
        <FormLabel htmlFor="last" className="contact__form-label">
          Last name
        </FormLabel>
        <Input
          className="contact__form-input"
          id="last"
          type="text"
          placeholder="Doe"
          {...register("last", { required: "This field is required." })}
        />
        <FormErrorMessage>
          {errors.last && errors.last.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email} className="contact__form-group">
        <FormLabel htmlFor="email" className="contact__form-label">
          Email
        </FormLabel>
        <Input
          className="contact__form-input"
          id="email"
          type="text"
          placeholder="johndoe@email.com"
          {...register("email", {
            required: "This field is required.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format.",
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.mobile} className="contact__form-group">
        <FormLabel htmlFor="mobile" className="contact__form-label">
          Mobile number
        </FormLabel>
        <Input
          className="contact__form-input"
          id="mobile"
          type="number"
          placeholder="0123 456 789"
          {...register("mobile", {
            required: "This field is required.",
            minLength: { value: 6, message: "Minimum length is 6." },
            maxLength: { value: 12, message: "Maximum length is 12." },
          })}
        />
        <FormErrorMessage>
          {errors.mobile && errors.mobile.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.message} className="contact__form-group">
        <FormLabel htmlFor="message" className="contact__form-label">
          Message
        </FormLabel>
        <Textarea
          id="message"
          type="text"
          placeholder="Enter your message"
          {...register("message", { required: "This field is required." })}
        />
        <FormErrorMessage>
          {errors.last && errors.last.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        isLoading={isSubmitting}
        type="submit"
        className="contact__form-btn"
        bgColor="yellow.500"
        border="1px"
        borderColor="transparent"
        color="white"
        _hover={{
          bgColor: "transparent",
          borderColor: "yellow.500",
          color: "yellow.500",
          textDecoration: "none",
        }}
      >
        Submit
      </Button>
    </form>
  );
}
