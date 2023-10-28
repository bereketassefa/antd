export default function Avatar({ img, fallbackInitial }) {
  return (
    <div className="w-[47px] h-[47px] items-center justify-center rounded-full overflow-hidden ">
      <img src={img} className="w-full object-cover h-full flex" />
    </div>
  );
}
