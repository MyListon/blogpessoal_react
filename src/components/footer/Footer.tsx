import { FacebookLogoIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-pink-400 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/myriam-liston-ferreira-perdiza/" target="_blank">
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/myriamperdiza/" target="_blank">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/myriam.liston" target="_blank">
                            <FacebookLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/MyListon" target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer