import { z } from "zod";

const email = z.string().trim().email({ message: "Invalid email address" });

const password = z
  .string()
  .trim()
  .min(6, { message: "password must be atleast 6 character required.. " })
  .max(16, {
    message: "password must be greater than 16 character required.. ",
  });

const userName = z
  .string()
  .trim()
  .min(3, { message: "Name must be at least 3 characters long." })
  .max(100, { message: "Name must be no more than 100 characters." });

const newPassword = z
  .string()
  .min(6, {
    message: "newPassword must be atleast 6 character required.. ",
  })
  .max(16, {
    message: "newPassword must be greater than 16 character required.. ",
  });

const confirmPassword = z
  .string()
  .min(6, {
    message: "confirmPassword must be atleast 6 character required.. ",
  })
  .max(16, {
    message: "confirmPassword must be greater than 16 character required.. ",
  });

export const loginSchema = z.object({
  email: email,
  password: password,
});

export const registerSchema = z.object({
  userName: userName,
  email: email,
  password: password,
});

export const contactSchema = z.object({
  name: userName,
  email: email,
  message: z
    .string()
    .trim()
    .min(1, { message: "mininmum 1 character required" }),
});

export const personalDetailsSchema = z.object({
  fullName: userName,
  email: email,
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  address: z.string().min(5, "Address is too short"),
  city: z.string().min(2, "City name is too short"),
  pinCode: z.string().regex(/^[0-9]{6}$/, "PIN Code must be 6 digits"),
  state: z.string().min(2, "State is required"),
});

export const paymentSchema = z.object({
  name: z.string().min(3, "Cardholder name is required"),
  cardNumaber: z
    .string()
    .regex(/^[0-9]{12,19}$/, "Card number must be 12 - 19 digits"),
  cvv: z.string().regex(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits"),
  expiry: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid expiry format"),
  stripId: z.string().min(1, "Stripe ID is required"),
});

export const changePassword = z
  .object({
    currentPassword: password,
    newPassword: newPassword,
    confirmPassword: confirmPassword,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "password not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: email,
});

export const resetPasswordSchema = z
  .object({
    newPassword: newPassword,
    confirmPassword: confirmPassword,
    email: email,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "password not match",
    path: ["confirmPassword"],
  });

export const setPasswordSchema = z.object({
  password: password,
  email: email,
});
