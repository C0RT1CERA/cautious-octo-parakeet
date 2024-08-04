import BookingForm from "./BookingForm";
import { BackgroundBeams } from "./BgBeams"; 

const DemoComp = () => {
    return (
        <section className="relative bg-blk1 text-zinc-100">
            <BackgroundBeams className="z-0" />
            <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <BookingForm />
                </div>
            </div>
        </section>
    );
};

export default DemoComp;