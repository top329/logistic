import OrderRequestDetail from "@/component/order/orderRequestDetail"

export default function Page({ params }: { params: { id: string } }) {
  // return <div>My Post: {params.id}</div>
  return (
    <div>
      <OrderRequestDetail orderId={params.id} />
    </div>
  )
}