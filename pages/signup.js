import Image from 'next/image'
import FormSignup from '../components/signup'

export default () => { 
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" width={480} height={450}  src="/assets/drawKit/wfh_1.svg"/>
                <FormSignup />
            </div>
        </section>
    )
}
