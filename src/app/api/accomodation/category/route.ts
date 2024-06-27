import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    result: {
      resultCode: "OK",
      resultMessage: "성공",
      resultDescription: "성공",
    },
    body: {
      totalPages: 1,
      totalElements: 5,
      content: [
        {
          id: 1,
          name: "숙소 이름1",
          description: "숙소1 설명입니다",
          postalCode: 2428099,
          address: "숙소1 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 1,
        },
        {
          id: 2,
          name: "숙소 이름2",
          description: "숙소2 설명입니다",
          postalCode: 2342456,
          address: "숙소2 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 1,
        },
        {
          id: 3,
          name: "숙소 이름3",
          description: "숙소3 설명입니다",
          postalCode: 7567853,
          address: "숙소3 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 1,
        },
        {
          id: 4,
          name: "숙소 이름4",
          description: "숙소4 설명입니다",
          postalCode: 1342567,
          address: "숙소4 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 1,
        },
        {
          id: 5,
          name: "숙소 이름5",
          description: "숙소5 설명입니다",
          postalCode: 4564521,
          address: "숙소5 주소",
          parkingAvailable: true,
          cookingAvailable: true,
          checkIn: "2024-06-18T00:00:00",
          checkOut: "2024-06-18T00:00:00",
          categoryId: 1,
        },
      ],
    },
  };

  return NextResponse.json(data);
}