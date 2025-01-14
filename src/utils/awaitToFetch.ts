/*
  Inspired by await-to-js
  https://github.com/scopsy/await-to-js
*/

import { AccommodationErrorCode } from "@/apis/accommodation/error";
import { AuthErrorCode } from "@/apis/auth/error";
import { CartErrorCode } from "@/apis/cart/error";
import { ReservationErrorCode } from "@/apis/reservation/error";

const successResultCodes = [
  "OK",
  "CREATED",
  "DELETE",
  "NICKNAME_UPDATED",
  "TOKEN_REFRESHED",
  "LOGOUT",
  "WITHDRAW",
  "REGISTER",
  "LOGIN",
] as const;

export type SuccessResultCode = (typeof successResultCodes)[number];

export type LikeErrorCode = "MEMBER_NOT_FOUND" | "ACCOMODATION_NOT_FOUND";

export type ReviewErrorCode =
  | "MEMBER_NOT_FOUND"
  | "ACCOMODATION_NOT_FOUND"
  | "RESERVATION_NOT_FOUND"
  | "INVALID_REVIEW_DATE"
  | "INVALID_REVIEW_STAR"
  | "EMPTY_REVIEW_COMMENT"
  | "DUPLICATE_REVIEW";

export type ErrorCode =
  | AccommodationErrorCode
  | AuthErrorCode
  | CartErrorCode
  | LikeErrorCode
  | ReservationErrorCode
  | ReviewErrorCode
  | "UNKNOWN_ERROR";

export interface ResponseResult<C> {
  result: {
    resultCode: C | string;
    resultMessage: string;
    resultDescription: string;
  };
}

export default async function to<B = {}, E extends ErrorCode = ErrorCode>(
  promise: Promise<Response>,
): Promise<[ResponseResult<E>, null] | [null, ResponseResult<SuccessResultCode> & B]> {
  try {
    const response = await promise;
    const data = await response.json();

    if (data.result.resultMessage === "success") {
      return [null, data] as [null, ResponseResult<SuccessResultCode> & B];
    } else {
      return [data, null] as [ResponseResult<E>, null];
    }
  } catch (error) {
    if (error instanceof Error) {
      return [
        {
          result: {
            resultCode: "FETCH_ERROR",
            resultMessage: error.name,
            resultDescription: error.message,
          },
        } as ResponseResult<E>,
        null,
      ];
    }

    return [
      {
        result: {
          resultCode: "UNKNOWN_ERROR",
          resultMessage: "UNKNOWN_ERROR",
          resultDescription: "알 수 없는 오류가 발생했습니다.",
        },
      } as ResponseResult<E>,
      null,
    ];
  }
}
