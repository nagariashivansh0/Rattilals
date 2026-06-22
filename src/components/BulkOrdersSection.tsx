interface Props {
  note: string;
  phones: string[];
  displayPhones: string[];
  deliveryNote: string;
}

export default function BulkOrdersSection({
  note,
  phones,
  displayPhones,
  deliveryNote,
}: Props) {
  return (
    <section className="section bulk-orders" id="orders">
      <div className="container bulk-panel">
        <div>
          <span className="eyebrow eyebrow-light">Bulk & Delivery</span>
          <h2>Corporate bookings, bulk orders, and home delivery</h2>
          <p>{note}</p>
          <p>{deliveryNote}</p>
        </div>

        <div className="bulk-phones">
          {displayPhones.map((phone, index) => (
            <a key={phone} className="btn btn-light" href={`tel:${phones[index]}`}>
              {phone}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
