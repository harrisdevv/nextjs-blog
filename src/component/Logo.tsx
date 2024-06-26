import Image from "next/image"
import Link from "next/link"
import siteMetadata from "@/util/SourceMetaData"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
        <Image src="/active-man-thinking-avatar.png" alt="Hien's logo" className="w-full h-auto rounded-full" sizes="20vw" width={100} height={100} priority objectFit="cover" />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">{siteMetadata.title}</span>
    </Link>
  )
}

export default Logo