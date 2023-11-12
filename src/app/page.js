import { Caveat } from "next/font/google";
import HeroCarousel from "./components/Carousel";
import TopNavbar from "./components/TopNavbar";
import { Button } from "@nextui-org/button";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "@nextui-org/link";
import Categories from "./components/Categories";
import { PageFooter } from "./components/PageFooter";
import { Input, Textarea } from "@nextui-org/input";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
    return (
        <>
            <main className='w-screen'>
                <section id='hero' className='grid grid-cols-2 p-8 bg-rose-100'>
                    <div className={`${caveat.className}`}>
                        <h1
                            className={`font-extrabold text-9xl text-slate-800 py-4`}>
                            Truwex Party Creators
                        </h1>
                        <span className={`text-4xl text-slate-500 py-4`}>
                            Paint your party with us
                        </span>
                        <div className='flex items-center py-8'>
                            <Button
                                href='/shop'
                                as={Link}
                                style={{
                                    background: "rgb(255,39,165)",
                                    background:
                                        "linear-gradient(166deg, rgba(255,39,165,1) 0%, rgba(223,0,99,1) 50%, rgba(255,39,165,1) 96%)",
                                }}
                                endContent={<FaShoppingCart />}
                                className='text-white shadow-md text-2xl'>
                                Shop Now
                            </Button>
                            <span className='mx-4'>OR</span>
                            <Button
                                className='text-xl text-rose-500 border shadow-md hover:text-white hover:bg-gradient-to-tr from-rose-500 to-rose-800 border-rose-500'
                                href='#contact'
                                as={Link}
                                variant='bordered'>
                                Customize Your Own
                            </Button>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <HeroCarousel />
                    </div>
                </section>
            </main>
            <section className='w-screen h-3/4 bg-rose-100'>
                <h2 className='text-4xl font-bold text-center text-rose-300 py-8'>
                    Categories
                </h2>
                <div className='w-full h-full'>
                    <Categories />
                </div>
            </section>
            <section id='contact' className='w-screen bg-rose-200'>
                <h2 className='text-4xl font-bold text-center text-rose-300 py-8'>
                    Contact Us
                </h2>
                <div className='grid grid-cols-4'>
                    <div>
                        <h3>Visit Us</h3>
                        <p>123 Main Street</p>
                        <p>Balapitiya, Sri Lanka 12345</p>
                    </div>
                    <div className='col-start-2 col-span-2 px-8 py-4'>
                        <h3>Send a message</h3>
                        <form>
                            <div key='' className='w-full mb-6 gap-4'>
                                <Input
                                    type='text'
                                    variant='underlined'
                                    label='Name'
                                    classNames={{
                                        label: "text-rose-800 dark:text-white/90",
                                        input: [
                                            "bg-transparent",
                                            "text-rose-800 dark:text-white/90",
                                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                        ],
                                        inputWrapper: [
                                            "shadow-md",
                                            "backdrop-blur-xl",
                                            "backdrop-saturate-200",
                                        ],
                                    }}
                                />
                            </div>
                            <div key='' className='w-full mb-6 gap-4'>
                                <Input
                                    type='email'
                                    variant='underlined'
                                    label='Email'
                                    classNames={{
                                        label: "text-rose-800 dark:text-white/90",
                                        input: [
                                            "bg-transparent",
                                            "text-rose-800 dark:text-white/90",
                                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                        ],
                                        inputWrapper: [
                                            "shadow-md",
                                            "backdrop-blur-xl",
                                            "backdrop-saturate-200",
                                        ],
                                    }}
                                />
                            </div>
                            <div className='w-full mb-6 gap-4'>
                                <Textarea
                                    key=''
                                    variant='underlined'
                                    label='Description'
                                    labelPlacement='outside'
                                    placeholder='Enter your description'
                                    className=''
                                    classNames={{
                                        label: "text-rose-800 dark:text-white/90",
                                        input: [
                                            "bg-transparent",
                                            "text-rose-800 dark:text-white/90",
                                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                        ],
                                        inputWrapper: [
                                            "shadow-md",
                                            "backdrop-blur-xl",
                                            "backdrop-saturate-200",
                                        ],
                                    }}
                                />
                            </div>
                            <div className="w-full grid place-content-end">
                            <Button
                                className='text-tiny bg-gradient-to-tr from-rose-500 to-rose-800 border-rose-500'
                                color='primary'
                                radius='sm'
                                size='md'>
                                Send
                            </Button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h3>Find us on social media</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </section>
            <PageFooter />
        </>
    );
}
