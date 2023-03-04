export const fadeInStaggerChildren = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .1
        }
    }
}

export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export const fadeInSlow = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1, 
        transition: {
            duration: .3
        }
    },
}