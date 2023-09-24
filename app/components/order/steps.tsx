export default function OrderSteps() {
  return (
    <ol>
      <li className="done">
        <span className="icon-check"></span>
        <span>Step 1: Cart Review</span>
      </li>
      <li className="done">
        <span className="icon-check"></span>
        <span>Step 2: Checkou</span>
      </li>
      <li className="current">
        <span className="icon-check"></span>
        <span>Step 3: Special Offer</span>
      </li>
      <li className="next">
        <span className="icon-check"></span>
        <span>Step 4: Confirmation</span>
      </li>
    </ol>
  )
}
