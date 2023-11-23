import React from 'react'
import "./Style.css"

function CardsDetails() {
  return (
    <div className='container mt-2'>
     <h2 className='text-center'>Iteams Details page</h2>
      
      <section className="container mt-3">
        <div className="iteamsdetails">
          <div className="items_img">
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
          </div>

           <div className='details'>
            <table>
                  <tr>
                    <td>
                      <p><strong>Restaurant :</strong>  Massala Theoryy</p>
                      <p><strong>Price :</strong>  ₹ 300</p>
                      <p><strong>Deshes :</strong>  North Indian, Biryani, mughlai</p>
                      <p><strong>Total :</strong>  ₹ 300</p>
                    </td>
                    <td>
                      <p><strong>Rating :</strong> <span style={{backgroundColor:"green", color:"#fff" , padding : "2px 5px" , borderRadius:"5px"}}>  3.5 ★</span></p>
                      <p><strong>Order Review :</strong><span> 1175 + order placed from here recently</span></p>
                      <p><strong>Remove :</strong> <span><i class="fa-solid fa-trash-can" style={{color:"red"}}></i></span></p>
                      
                    </td>
                  </tr>
            </table>
           </div>
           


        </div>
      </section>
    </div>
  )
}

export default CardsDetails