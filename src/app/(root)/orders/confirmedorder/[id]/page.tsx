import OrderDetail from "@/component/order/orderConfirmDetail"

export default function Page({ params }: { params: { id: string } }) {
  // return <div>My Post: {params.id}</div>
  return (
    <div>
      <OrderDetail orderId={params.id}/>
    </div>
  )
}