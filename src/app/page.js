import HeroCarousel from "./components/Carousel";
import TopNavbar from "./components/TopNavbar";

export default function Home() {
    return (
        <main
            className='w-screen h-screen'>
            <TopNavbar />
            <HeroCarousel />
        </main>
    );
}
