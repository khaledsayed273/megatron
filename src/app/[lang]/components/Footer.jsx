"use client"
import React, { useEffect, useState } from 'react'
import background from "../../../../public/images/footer.jpg"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../../../public/images/logo.png"
import API from '@/api/API'

function Footer({ baseUrl, lang, navbarTranslate }) {
    const nav = [
        {
            id: 1,
            name: navbarTranslate.home,
            path: `/${lang}`,
        },
        {
            id: 2,
            name: navbarTranslate.services,
            path: `/${lang}/services`,
        },
        {
            id: 3,
            name: navbarTranslate.about,
            path: `/${lang}/about`,
        },
        {
            id: 4,
            name: navbarTranslate.blogs,
            path: `/${lang}/blogs/page/all/1`,
        },
        // {
        //     id: 5,
        //     name: navbarTranslate.careers,
        //     path: `/${lang}/careers`,
        // },
        {
            id: 6,
            name: navbarTranslate.projects,
            path: `/${lang}/projects/page/all/1`,
        }
    ]

    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const res = await API.get(`${baseUrl}/settings`)
            setData(res.data)
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div data-aos="fade-up" style={{ backgroundImage: `url(${background.src})` }} className='relative bg-cover bg-center px-5 mt-20 md:px-10 w-full h-[500px] sm:h-[300px]'>
            <div className='absolute w-full h-full left-0 top-0 bg-black opacity-80'>
            </div>
            <div className='z-50 absolute left-0 top-0 right-0 bottom-0 '>
                <div className='container mx-auto h-full flex flex-col justify-center'>
                    <div className='flex items-start flex-col sm:flex-row sm:items-center w-full  sm:mt-28'>
                        <div className='flex items-center flex-col sm:flex-row sm:items-center justify-between w-full sm:border-t sm:border-b'>
                            <div className='mx-auto mb-5 sm:mb-0 sm:me-auto sm:ms-0'>
                                <Link aria-label="logoFooter" href={`/`} className='relative inline-block px-2 py-1 mt-1'>
                                    <svg width="60" height="60" viewBox="0 0 909 609" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M771.334 508L838.334 556.5L771.334 605" stroke="#D25100" strokeWidth="8" />
                                        <path d="M771.334 508L838.334 556.5L771.334 605" stroke="#D25100" strokeWidth="8" />
                                        <path d="M771.334 508L838.334 556.5L771.334 605" stroke="#D25100" strokeWidth="8" />
                                        <path d="M771.334 508L838.334 556.5L771.334 605" stroke="#D25100" strokeWidth="8" />
                                        <path d="M653.333 14.2668C609.2 39.4667 577.333 57.3334 540 78.0001C519.867 89.2001 490.4 105.467 474.667 114.267C458.933 123.067 440.133 133.333 433.067 137.333L420 144.4V180.267C420 204.4 420.4 216 421.467 216C422.133 216 428.933 212.8 436.4 208.8C443.867 204.933 462.933 194.933 478.667 186.667C494.4 178.4 518.267 165.733 531.467 158.533C544.8 151.2 556.133 145.333 556.533 145.333C556.933 145.333 557.333 186.533 557.333 236.8V328.267L562.4 325.2C565.067 323.6 581.733 314.267 599.333 304.667C616.933 295.067 639.333 282.8 649.067 277.333L666.667 267.467V232.4C666.667 213.067 666.133 197.333 665.6 197.333C665.067 197.333 657.6 200.933 649.2 205.467C640.933 209.867 623.333 218.933 610.267 225.467L586.667 237.333L586.933 181.733L587.333 126.133L600 119.333C606.8 115.733 627.6 104.8 646 95.3334L679.333 78.0001L679.733 38.9334C679.867 17.6001 679.6 9.15527e-05 679.067 9.15527e-05C678.4 0.133423 666.933 6.40009 653.333 14.2668Z" fill="#5C5E5D" />
                                        <path d="M636 124.533C620.933 131.2 605.867 137.867 602.267 139.2C598.8 140.533 595.333 142.667 594.667 144C593.067 146.933 592.8 211.067 594.4 210.4C594.933 210.133 608.267 203.6 624 195.867C639.733 188 655.867 180.4 659.733 178.667L666.667 175.733V143.867C666.667 119.2 666.267 112 665.067 112.133C664.133 112.133 651.067 117.733 636 124.533Z" fill="#5C5E5D" />
                                        <path d="M186.767 14.2667C230.901 39.4666 262.767 57.3333 300.101 78C320.234 89.2 349.701 105.467 365.434 114.267C381.167 123.067 399.967 133.333 407.034 137.333L420.101 144.4V180.267C420.101 204.4 419.701 216 418.634 216C417.967 216 411.167 212.8 403.701 208.8C396.234 204.933 377.167 194.933 361.434 186.667C345.701 178.4 321.834 165.733 308.634 158.533C295.301 151.2 283.967 145.333 283.567 145.333C283.167 145.333 282.767 186.533 282.767 236.8V328.267L277.701 325.2C275.034 323.6 258.367 314.267 240.767 304.667C223.167 295.067 200.767 282.8 191.034 277.333L173.434 267.467V232.4C173.434 213.067 173.967 197.333 174.501 197.333C175.034 197.333 182.501 200.933 190.901 205.467C199.167 209.867 216.767 218.933 229.834 225.467L253.434 237.333L253.167 181.733L252.767 126.133L240.101 119.333C233.301 115.733 212.501 104.8 194.101 95.3333L160.767 78L160.367 38.9333C160.234 17.6 160.501 0 161.034 0C161.701 0.133331 173.167 6.39999 186.767 14.2667Z" fill="#D65102" />
                                        <path d="M204.1 124.533C219.167 131.2 234.234 137.867 237.834 139.2C241.3 140.533 244.767 142.667 245.434 144C247.034 146.933 247.3 211.067 245.7 210.4C245.167 210.133 231.834 203.6 216.1 195.867C200.367 188 184.234 180.4 180.367 178.667L173.434 175.733V143.867C173.434 119.2 173.834 112 175.034 112.133C175.967 112.133 189.034 117.733 204.1 124.533Z" fill="#D65102" />
                                        <path d="M527.067 188.867C514.001 195.4 503.334 201.267 503.334 202.067C503.334 202.733 504.267 205.667 505.334 208.333C506.401 211.133 508.801 219.133 510.667 226.067C512.534 233 514.667 240.467 515.334 242.733C517.467 249.8 521.601 266.467 524.001 277.4C525.201 283.267 526.801 289.267 527.601 290.867C528.267 292.333 528.667 294.067 528.534 294.867C528.401 295.533 528.534 296.333 528.667 296.733C528.801 297.133 530.401 303.667 532.134 311.4C533.867 319.133 536.001 327.8 536.667 330.733C537.334 333.667 539.334 341.933 541.067 349C543.201 357.533 543.734 362.067 542.801 362.067C542.001 362.067 542.267 362.733 543.601 363.4C544.801 364.2 546.667 364.333 547.734 363.933C550.667 362.867 551.601 334.467 551.067 249.933L550.667 177L527.067 188.867Z" fill="#D25100" />
                                        <path d="M524.477 378.285C537.543 371.752 548.21 365.885 548.21 365.085C548.21 364.418 547.277 361.485 546.21 358.818C545.143 356.018 542.743 348.018 540.877 341.085C539.01 334.152 536.877 326.685 536.21 324.418C534.077 317.352 529.943 300.685 527.543 289.752C526.343 283.885 524.743 277.885 523.943 276.285C523.277 274.818 522.877 273.085 523.01 272.285C523.143 271.618 523.01 270.818 522.877 270.418C522.743 270.018 521.143 263.485 519.41 255.752C517.677 248.018 515.543 239.352 514.877 236.418C514.21 233.485 512.21 225.218 510.477 218.152C508.343 209.618 507.81 205.085 508.743 205.085C509.543 205.085 509.277 204.418 507.943 203.752C506.743 202.952 504.877 202.818 503.81 203.218C500.877 204.285 499.943 232.685 500.477 317.218L500.877 390.152L524.477 378.285Z" fill="#FB6500" />
                                        <path d="M459.067 223.867C446.001 230.4 435.334 236.267 435.334 237.067C435.334 237.733 436.267 240.667 437.334 243.333C438.401 246.133 440.801 254.133 442.667 261.067C444.534 268 446.667 275.467 447.334 277.733C449.467 284.8 453.601 301.467 456.001 312.4C457.201 318.267 458.801 324.267 459.601 325.867C460.267 327.333 460.667 329.067 460.534 329.867C460.401 330.533 460.534 331.333 460.667 331.733C460.801 332.133 462.401 338.667 464.134 346.4C465.867 354.133 468.001 362.8 468.667 365.733C469.334 368.667 471.334 376.933 473.067 384C475.201 392.533 475.734 397.067 474.801 397.067C474.001 397.067 474.267 397.733 475.601 398.4C476.801 399.2 478.667 399.333 479.734 398.933C482.667 397.867 483.601 369.467 483.067 284.933L482.667 212L459.067 223.867Z" fill="#D25100" />
                                        <path d="M456.477 413.285C469.543 406.752 480.21 400.885 480.21 400.085C480.21 399.418 479.277 396.485 478.21 393.818C477.143 391.018 474.743 383.018 472.877 376.085C471.01 369.152 468.877 361.685 468.21 359.418C466.077 352.352 461.943 335.685 459.543 324.752C458.343 318.885 456.743 312.885 455.943 311.285C455.277 309.818 454.877 308.085 455.01 307.285C455.143 306.618 455.01 305.818 454.877 305.418C454.743 305.018 453.143 298.485 451.41 290.752C449.677 283.018 447.543 274.352 446.877 271.418C446.21 268.485 444.21 260.218 442.477 253.152C440.343 244.618 439.81 240.085 440.743 240.085C441.543 240.085 441.277 239.418 439.943 238.752C438.743 237.952 436.877 237.818 435.81 238.218C432.877 239.285 431.943 267.685 432.477 352.218L432.877 425.152L456.477 413.285Z" fill="#FF6400" />
                                        <path d="M320.476 192.867C333.542 199.4 344.209 205.267 344.209 206.067C344.209 206.733 343.276 209.667 342.209 212.333C341.142 215.133 338.742 223.133 336.876 230.067C335.009 237 332.876 244.467 332.209 246.733C330.076 253.8 325.942 270.467 323.542 281.4C322.342 287.267 320.742 293.267 319.942 294.867C319.276 296.333 318.876 298.067 319.009 298.867C319.142 299.533 319.009 300.333 318.876 300.733C318.742 301.133 317.142 307.667 315.409 315.4C313.676 323.133 311.542 331.8 310.876 334.733C310.209 337.667 308.209 345.933 306.476 353C304.342 361.533 303.809 366.067 304.742 366.067C305.542 366.067 305.276 366.733 303.942 367.4C302.742 368.2 300.876 368.333 299.809 367.933C296.876 366.867 295.942 338.467 296.476 253.933L296.876 181L320.476 192.867Z" fill="#F16A08" />
                                        <path d="M323.066 382.285C310 375.752 299.333 369.885 299.333 369.085C299.333 368.418 300.266 365.485 301.333 362.818C302.4 360.018 304.8 352.018 306.666 345.085C308.533 338.152 310.666 330.685 311.333 328.418C313.466 321.352 317.6 304.685 320 293.752C321.2 287.885 322.8 281.885 323.6 280.285C324.266 278.818 324.666 277.085 324.533 276.285C324.4 275.618 324.533 274.818 324.666 274.418C324.8 274.018 326.4 267.485 328.133 259.752C329.866 252.018 332 243.352 332.666 240.418C333.333 237.485 335.333 229.218 337.066 222.152C339.2 213.618 339.733 209.085 338.8 209.085C338 209.085 338.266 208.418 339.6 207.752C340.8 206.952 342.666 206.818 343.733 207.218C346.666 208.285 347.6 236.685 347.066 321.218L346.666 394.152L323.066 382.285Z" fill="#D25100" />
                                        <path d="M388.601 227.867C401.667 234.4 412.334 240.267 412.334 241.067C412.334 241.733 411.401 244.667 410.334 247.333C409.267 250.133 406.867 258.133 405.001 265.067C403.134 272 401.001 279.467 400.334 281.733C398.201 288.8 394.067 305.467 391.667 316.4C390.467 322.267 388.867 328.267 388.067 329.867C387.401 331.333 387.001 333.067 387.134 333.867C387.267 334.533 387.134 335.333 387.001 335.733C386.867 336.133 385.267 342.667 383.534 350.4C381.801 358.133 379.667 366.8 379.001 369.733C378.334 372.667 376.334 380.933 374.601 388C372.467 396.533 371.934 401.067 372.867 401.067C373.667 401.067 373.401 401.733 372.067 402.4C370.867 403.2 369.001 403.333 367.934 402.933C365.001 401.867 364.067 373.467 364.601 288.933L365.001 216L388.601 227.867Z" fill="#FF6400" />
                                        <path d="M391.191 417.285C378.125 410.752 367.458 404.885 367.458 404.085C367.458 403.418 368.391 400.485 369.458 397.818C370.525 395.018 372.925 387.018 374.791 380.085C376.658 373.152 378.791 365.685 379.458 363.418C381.591 356.352 385.725 339.685 388.125 328.752C389.325 322.885 390.925 316.885 391.725 315.285C392.391 313.818 392.791 312.085 392.658 311.285C392.525 310.618 392.658 309.818 392.791 309.418C392.925 309.018 394.525 302.485 396.258 294.752C397.991 287.018 400.125 278.352 400.791 275.418C401.458 272.485 403.458 264.218 405.191 257.152C407.325 248.618 407.858 244.085 406.925 244.085C406.125 244.085 406.391 243.418 407.725 242.752C408.925 241.952 410.791 241.818 411.858 242.218C414.791 243.285 415.725 271.685 415.191 356.218L414.791 429.152L391.191 417.285Z" fill="#D25100" />
                                        <path d="M446.667 324.133C446.667 325.6 447.2 326.533 448 326C448.667 325.6 448.934 324.4 448.4 323.333C447.467 320.533 446.667 320.8 446.667 324.133Z" fill="#D25100" />
                                        <path d="M2.66667 501.333C0.133333 503.867 0 505.467 0 553.2C0 597.333 0.266667 602.533 2.26667 604.133C4.53333 606.133 21.4667 606.8 25.7333 605.067C27.7333 604.133 28 601.6 28 578C28 563.733 28.4 552 29.0667 552C29.6 552 32.4 558.133 35.2 565.733C38 573.2 42.1333 583.467 44.4 588.4L48.4 597.467L60.4 597.067L72.5333 596.667L80.5333 575.067C85.0667 563.2 89.0667 553.067 89.7333 552.533C90.2667 552 90.6667 562.933 90.6667 576.933C90.6667 595.6 91.0667 602.667 92.4 603.733C93.2 604.533 98.2667 605.467 103.333 606C111.733 606.8 112.933 606.667 115.733 604L118.667 601.2V551.6C118.667 514.667 118.267 501.467 117.067 500.267C116 499.2 110.8 498.667 102.4 498.667C90.4 498.667 89.2 498.933 87.4667 501.6C86.4 503.333 81.3333 514.8 76.2667 527.333C63.0667 559.467 61.0667 564 60.1333 564C59.6 564 54.2667 552.133 48.1333 537.6C42.1333 523.2 35.7333 508.667 34.2667 505.333L31.3333 499.333L18.4 498.933C6.8 498.667 5.2 498.8 2.66667 501.333Z" fill="#FEFEFE" />
                                        <path d="M140.4 500.267L137.333 501.733V552C137.333 593.067 137.733 602.667 139.2 603.867C140.4 604.933 152 605.333 178.8 605.067L216.666 604.667L221.6 594.667C224.4 589.2 226.666 583.867 226.666 583.067C226.666 581.733 219.2 581.333 195.733 581.067L164.666 580.667L164.266 572.267L163.866 564H180.266C189.333 564 198 563.6 199.466 563.2C201.6 562.667 203.6 559.6 206.533 552.533C208.8 547.2 210.666 542.4 210.666 542C210.666 541.6 200.133 541.333 187.333 541.333H164V532V522.667H190.666H217.2L222.666 512.933C231.333 497.333 234.533 498.667 185.733 498.8C158.133 498.8 142.266 499.333 140.4 500.267Z" fill="#FEFEFE" />
                                        <path d="M260 499.867C251.067 502.667 243.6 508.8 239.6 516.667C236.934 522.133 235.334 562.133 237.2 577.2C238.934 590.267 241.734 595.467 250.534 601.333L256.4 605.333H289.334C313.067 605.333 322.534 604.933 323.734 603.733C324.934 602.533 325.334 593.6 325.334 571.733V541.333H308.134C297.2 541.333 290.534 541.867 290 542.8C289.467 543.6 289.467 547.467 290 551.6C290.8 558.4 291.2 559.067 295.467 560.8L300.134 562.8L299.734 571.067L299.334 579.333L281.467 579.733C268 580 263.334 579.6 262.4 578.4C261.2 576.4 260.934 541.067 262.134 531.067L263.067 524L285.2 523.733L307.334 523.333L313.067 513.333C321.867 497.733 323.334 498.667 291.067 498.8C275.734 498.8 261.867 499.333 260 499.867Z" fill="#FEFEFE" />
                                        <path d="M375.334 501.333C372.934 504 372.934 504.267 377.334 515.733C381.334 526.133 396.8 559.867 412.134 591.2C415.2 597.6 419.2 603.867 420.8 604.933C424.8 607.467 439.867 606.8 441.6 604C442.534 602.533 438.934 594 428.934 573.333C421.2 557.6 410.934 536 406.134 525.333C393.2 496.8 395.2 499.333 385.867 498.933C379.2 498.667 377.467 499.067 375.334 501.333Z" fill="#FEFEFE" />
                                        <path d="M618.666 499.467C606.133 501.867 598.933 508.533 595.066 520.933C591.733 531.867 591.733 577.733 595.066 586.4C600.4 600.267 608 605.467 624.266 606.4C646.933 607.733 658.266 600.267 663.466 580.667C666.133 570.933 666 533.6 663.333 523.333C658.933 506.267 650.8 500 632.666 499.333C626.8 499.067 620.533 499.2 618.666 499.467ZM644.933 511.467C650.933 515.867 653.6 522.933 654.933 537.867C657.333 563.733 653.866 585.733 646.4 592.267C641.733 596.267 638.133 597.333 628.133 597.333C616.533 597.333 612.133 595.733 608.266 590C603.466 583.067 602.266 576 602.4 553.333C602.4 524 606 513.6 617.333 508.933C618.4 508.4 624.266 508.267 630.266 508.4C638.8 508.667 642 509.2 644.933 511.467Z" fill="#FEFEFE" />
                                        <path d="M744.401 499.733C743.067 500.533 742.667 511.333 742.401 543.333L742.001 585.867L722.801 551.867C690.534 494.933 694.001 500 687.201 500H681.334V552.667V605.333H686.001H690.667L690.934 561.2L691.334 517.067L716.667 561.2L741.867 605.333H746.934H752.001L752.267 558.267C752.401 532.533 752.534 509.067 752.534 506.267C752.401 499.867 748.801 496.933 744.401 499.733Z" fill="#FEFEFE" />
                                        <path d="M426.267 500.933C425.734 501.333 425.334 503.467 425.334 505.6V509.333H440.001H454.667V557.333V605.333H460.001H465.334V557.333V509.333H480.001H494.667V504.667V500H460.934C442.267 500 426.667 500.4 426.267 500.933Z" fill="#FEFEFE" />
                                        <path d="M507.334 504.133C506.8 506.4 506.8 530.133 507.334 556.8L508.4 605.333H512.8H517.334L517.6 580.933L518 556.667L526.934 556.267C532.934 556 536.267 556.4 537.334 557.6C538.134 558.533 546 569.467 554.667 581.867C563.334 594.267 571.467 605.067 572.8 605.733C574.4 606.667 575.734 606.267 577.6 604.267C580.267 601.6 580.267 601.6 566.134 580.933C549.334 556.267 549.2 556 554.134 556C556.134 556 560.4 554.8 563.467 553.2C580.667 544.933 585.2 523.733 572.934 509.733C565.334 501.067 561.2 500 533.067 500H508.267L507.334 504.133ZM563.334 513.733C568.267 518.667 570.134 525.333 568.8 532.533C566.667 544.133 557.734 548 533.067 548H517.334V528.667V509.333H538.134H558.934L563.334 513.733Z" fill="#FEFEFE" />
                                        <path d="M363.733 532.4C361.733 536.933 353.866 554.8 346 572C332.933 601.067 332.133 603.467 334.266 605.067C337.2 607.2 355.866 606 358.133 603.467C360.666 600.8 380 556.667 380 553.467C380 551.067 369.066 524 368 524C367.6 524 365.733 527.733 363.733 532.4Z" fill="#FEFEFE" />
                                        <path d="M174 116.733C174 119 174.933 120.867 176.133 121.4C177.467 121.933 178 123.133 177.467 125.133C177.067 126.867 177.067 127.4 177.467 126.6C178 125.267 178.667 125.267 180.133 126.733C181.2 127.8 182 129.133 182 129.8C182 130.333 183.467 132.467 185.2 134.333C187.067 136.333 190.267 141.4 192.667 145.667C194.933 149.933 197.2 153.8 197.733 154.2C198.4 154.6 200.8 158.2 203.2 162.2C205.733 166.2 208 169.8 208.533 170.2C209.733 171.133 216.667 181.933 216.667 182.867C216.667 183.267 218.133 185.533 220.133 187.933C222 190.333 223.467 192.6 223.333 193.267C223.2 196.067 240.8 208.867 244.933 208.867C245.467 208.867 246 194.067 246 175.8V142.867L239.6 140.333C236.133 139 222.267 133 208.667 127.267C195.067 121.4 181.733 115.8 179.067 114.733L174 113V116.733Z" fill="#D25100" />
                                        <path d="M246 205.133C246 202.867 245.067 201 243.867 200.467C242.533 199.933 242 198.733 242.533 196.733C242.933 195 242.933 194.467 242.533 195.267C242 196.6 241.333 196.6 239.867 195.133C238.8 194.067 238 192.733 238 192.067C238 191.533 236.533 189.4 234.8 187.533C232.933 185.533 229.733 180.467 227.333 176.2C225.067 171.933 222.8 168.067 222.267 167.667C221.6 167.267 219.2 163.667 216.8 159.667C214.267 155.667 212 152.067 211.467 151.667C210.267 150.733 203.333 139.933 203.333 139C203.333 138.6 201.867 136.333 199.867 133.933C198 131.533 196.533 129.267 196.667 128.6C196.8 125.8 179.2 113 175.067 113C174.533 113 174 127.8 174 146.067V179L180.4 181.533C183.867 182.867 197.733 188.867 211.333 194.6C224.933 200.467 238.267 206.067 240.933 207.133L246 208.867V205.133Z" fill="#F16A08" />
                                    </svg>
                                </Link>
                            </div>

                            <div className='px-5 sm:px-0'>
                                <ul className='text-white flex flex-col sm:flex-row'>
                                    {nav.map((item) => (
                                        <li className='sm:me-5 text-center my-3' key={item.id}>
                                            <Link className='capitalize font-semibold' href={`${item.path}`}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='text-white mt-10 sm:mt-20 sm:mb-16 flex flex-col sm:flex-row justify-between px-3'>
                        <span className='text-sm text-center sm:text-start'>© 2024 Megatron. All rights reserved.</span>
                        {data.status && (
                            <div className='mt-7 sm:mt-0 flex justify-center'>
                                <Link aria-label="whatsApp" className='mx-3' target='_blank' href={`${data.data.whatsapp}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19" height="19" viewBox="0,0,256,256">
                                        <g fill="#fffbfb" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path></g></g>
                                    </svg>
                                </Link>
                                <Link aria-label="facebook" className='mx-3' target='_blank' href={`${data.data.facebook}`}>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.8035 0.828371H1.57348C1.45718 0.828108 1.34198 0.850819 1.23449 0.895201C1.127 0.939583 1.02933 1.00476 0.947101 1.08699C0.864869 1.16923 0.79969 1.26689 0.755308 1.37438C0.710926 1.48188 0.688215 1.59708 0.688479 1.71337V15.9434C0.688479 16.4334 1.08348 16.8284 1.57348 16.8284H9.23248V10.6314H7.14248V8.23137H9.23248V6.44837C9.23248 4.37937 10.5025 3.25937 12.3365 3.25937C13.2115 3.25937 13.9795 3.31237 14.2035 3.35537V5.51037H12.9125C11.9095 5.51037 11.7285 5.97937 11.7285 6.68337V8.23037H14.1075L13.7975 10.6304H11.7285V16.8284H15.8035C16.2935 16.8284 16.6885 16.4334 16.6885 15.9434V1.71337C16.6887 1.59708 16.666 1.48188 16.6216 1.37438C16.5773 1.26689 16.5121 1.16923 16.4299 1.08699C16.3476 1.00476 16.25 0.939583 16.1425 0.895201C16.035 0.850819 15.9198 0.828108 15.8035 0.828371Z" fill="white" />
                                    </svg>

                                </Link>
                                <Link aria-label="linkedin" className='mx-3' target='_blank' href={`${data.data.linkedin}`}>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.5045 0.828369C16.1545 0.828369 16.6885 1.34037 16.6885 1.98037V15.6764C16.6885 16.3064 16.1555 16.8284 15.5045 16.8284H1.87248C1.22248 16.8284 0.688477 16.3054 0.688477 15.6764V1.98037C0.688477 1.34037 1.22148 0.828369 1.87248 0.828369H15.5045ZM4.25148 5.78837C4.61144 5.77868 4.95341 5.62888 5.20458 5.37086C5.45576 5.11283 5.5963 4.76696 5.5963 4.40687C5.5963 4.04678 5.45576 3.7009 5.20458 3.44288C4.95341 3.18485 4.61144 3.03505 4.25148 3.02537C3.48348 3.02537 2.87548 3.64437 2.87548 4.40137C2.87548 5.16937 3.48348 5.78837 4.25148 5.78837ZM14.3205 10.2784C14.3205 8.22037 13.8835 6.64137 11.4725 6.64137C10.3205 6.64137 9.55248 7.27137 9.23248 7.86837H9.20048V6.82337H6.92848V14.4604H9.29648V10.6844C9.29648 9.69237 9.47748 8.72137 10.7155 8.72137C11.9315 8.72137 11.9525 9.86337 11.9525 10.7484V14.4604H14.3205V10.2784ZM3.05648 14.4614H5.43548V6.82337H3.05648V14.4614Z" fill="white" />
                                    </svg>
                                </Link>
                            </div>
                        )}


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
