import OrderDraftDetail from "@/component/order/orderDraftDetail"

export default function Page({ params }: { params: { id: string } }) {
  // return <div>My Post: {params.id}</div>
  return (
    <div>
      <OrderDraftDetail orderId={params.id} />
    </div>
  )
}