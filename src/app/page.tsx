"use client";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <>
      <main className="m-auto min-h-screen max-w-screen-xl flex flex-col justify-center">
        <div className="py-14 px-4">
          <Icons.logo className="w-24 h-fit m-auto mb-20" />
          <h1 className="scroll-m-20 text-center md:text-4xl font-semibold md:font-extrabold tracking-tight lg:text-5xl text-2xl">
            Social Media Assitant To
            <br />
          </h1>
          <h2 className="mb-8  scroll-m-20 text-center text-4xl md:text-7xl font-extrabold  tracking-tight text-primary first:mt-0">
            Automate Customer Inquires
          </h2>
          <h3 className="m-auto max-w-[800px] text-center text-base md:text-xl text-muted-foreground">
             Lipy.ai will streamline your social media business by offering tailored responses for customer inquiries, managing orders, and facilitating seamless appointment bookings. Elevate your customer satisfaction rate and fuel the expansion of your business.
          </h3>
          <div className="mt-8 flex justify-center space-x-6">
            <Button
              variant={null}
              size="lg"
              className="h-14 w-56 bg-gradient-to-r from-[#159900] to-primary/80 text-lg text-white hover:bg-primary"
            >
              Coming Soon
            </Button>
            {/* <Button variant={"outline"} size="lg" className="h-14 w-56 text-lg">
              Learn More
            </Button> */}
          </div>
          <p className="mt-10 text-center font-semibold">
            Will seamlessly work with -
          </p>

          <div className="my-4 flex justify-center space-x-3">
            <Icons.facebook className="h-7 w-7 fill-muted-foreground/70 text-muted opacity-80 " />
            <Icons.instagram className="h-7 w-7 fill-muted-foreground/70 text-muted opacity-80 " />
          </div>
          <p className=" text-light text-center text-xs text-neutral-400 max-w-[275px] m-auto">
            Much more communication channels like email, phone, and other social media platforms will
            be supported in future.
          </p>
        </div>
      </main>
    </>
  );
}
