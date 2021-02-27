export class SbaInformation {
    id: number;
    title: string;
    headerAddress: string;
    phoneNoDefault: string;
    phoneNoAlternate: string;
    footerAddress: string;
    footerSbaInfo: string;
    AboutUsTitle: string;
    AboutUsDescription: string;
    AboutUsDetailedDescription: string;
    Email: string;
    Size: 'small_1_to_50' | 'medium_51_to_250' | 'large_251_and_more';
    paragraph:string;
    image: {url:string;}
    AboutUsImage: {url:string;}

}
