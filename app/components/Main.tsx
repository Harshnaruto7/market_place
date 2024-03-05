import {SideNav,Hero,Hero2,Card,Footer} from "./index"


export default function Main(){


    return(

   <div>
        <SideNav></SideNav>
    <section className="ml-0 sm:ml-72">
        
        <Hero></Hero>
    </section>
    <section className="ml-0 sm:ml-72">
        <Hero2></Hero2>     
    </section>
    <section className="ml-0 sm:ml-72 ">

            <div className="sm:flex sm:flex-row sm:justify-between sm:gap-2 sm:mx-10 sm:my-10 flex flex-col gap-2 ml-2 ">
   <Card></Card>
          <Card></Card>
          <Card></Card>
            </div>
            <Footer></Footer>
       

       
        
    </section>
   </div>
   

    );

}




















