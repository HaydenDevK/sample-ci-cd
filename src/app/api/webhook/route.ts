import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { body } = request;

  alert(body);
  console.log(body);

  await fetch(
    // "https://discord.com/api/webhooks/1310879401558147112/ZH2WMjC_tp7CBUP_uxSGyr2rpM_DiHre6lb4KCnvku9KAR-mViB7eLElfSBZsqj3DYAS",
    "https://discord.com/api/webhooks/1311256900662202429/R9kQj5gBUh28m6nPlJIfjeTr1pvmq_0tqFvZyG78ieNQq2Voe7BqPlnyj77fnQ0Idr41",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ content: "hi" }),
    }
  );
  return NextResponse.json({});
}
