import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, description } = body;

    if (!fullName || !email || !description) {
      return NextResponse.json(
        { error: "Required fields missing: Full Name, Email, Description." },
        { status: 400 }
      );
    }

    // In a production environment, send email via Resend, SendGrid, or AWS SES
    console.log("New Royal Caribbean Inquiry Received:", body);

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
