type Brand<T, BrandT> = T & { __brand: BrandT };

/**
 * @name Brand
 * @description Known as hacky way to get nominal types in typescript.
 * Nominal means that type is resolved not by a shape, but by a reference.
 * Useful for representing different ids as it can prevent value collision.
 */

type UserID = Brand<number, "UserID">;
const userID = 123 as UserID;

type Booking = Brand<
  {
    id: number;
    startDate: Date;
    endDate: Date;
  },
  "Booking"
>;
const booking = {
  id: 123,
  startDate: new Date("2022-01-10T16:50:50+0000"),
  endDate: new Date("2022-01-16T16:50:50+0000"),
} as Booking;
