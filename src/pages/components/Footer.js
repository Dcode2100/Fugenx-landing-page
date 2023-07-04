import Linkedin from "./icons/linkedin"
import Instagram from "./icons/instagram"
import Github from "./icons/github"


export default function Footer() {
    return(
        <footer className="py-8 text-center">
            <div className="fixed md:flex flex-col hidden bottom-0 left-10 justify-center">
                <a className="mt-8 hover:-translate-y-1 transition-all mx-auto" aria-label="linkedin" href="https://www.linkedin.com/in/dikshantsolanki214/" target="_blank" rel="noreferrer">
                    <Linkedin/>
                </a>
                <a className="mt-8 hover:-translate-y-1 transition-all mx-auto" aria-label="instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <Instagram/>
                </a>
                <a className="mt-8 hover:-translate-y-1 transition-all mx-auto mb-10" aria-label="github" href="https://github.com/Dcode2100/" target="_blank" rel="noreferrer">
                    <Github/>
                </a>
                <div className="h-20 w-px bg-light mx-auto"></div>
            </div>
            <div className="md:hidden flex justify-center mb-8">
                <a className="mx-2" aria-label="linkedin" href="https://www.linkedin.com/in/igorxavierdasilva/" target="_blank" rel="noreferrer">
                    <Linkedin/>
                </a>
                <a className="mx-2" aria-label="instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <Instagram/>
                </a>
                <a className="mx-2" aria-label="github" href="https://github.com/igorxaviers/" target="_blank" rel="noreferrer">
                    <Github/>
                </a>
            </div>
            <p className="md:text-base text-xs">
                © {new Date().getFullYear()} Design & Development by <span className="text-tertiary">Dikshant Solanki</span> ❤️
            </p>
        </footer>                                    
    )
}