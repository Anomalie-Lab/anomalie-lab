declare module "@splidejs/react-splide";
declare module "@hookform/resolvers/yup" {
  import { Resolver } from "react-hook-form";
  import * as yup from "yup";

  export function yupResolver<T extends yup.AnyObjectSchema>(
    schema: T,
    options?: {
      /**
       * Return all validation errors
       * @default false
       */
      mode?: "sync" | "async";
      /**
       * Context object to validate
       * @default undefined
       */
      context?: Record<string, any>;
    }
  ): Resolver<yup.Asserts<T>, any>;
}
