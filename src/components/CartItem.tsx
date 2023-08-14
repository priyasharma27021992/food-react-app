import TrashIcon from "/assets/icons/trash-outline.svg";
import plus from "/assets/icons/add-circle-outline.svg";
import minus from "/assets/icons/remove-circle-outline.svg";

export default function CartItem({ product }) {
  const { name, image, description, id } = product;
  return (
    <div className="w-4/6 mx-auto">
      <div className="flex flex-row justify-evenly items-center">
        <img
          className="h-20 w-20 rounded-lg object-cover"
          src={image}
          alt={`${name} image`}
        />
        <p className="text-sm text-black-500">{name}</p>
        <div>
          <button>
            <img src={plus} alt="logo" className="h-5 w-5 bg-white" />
          </button>
          <button>
            <img src={minus} alt="logo" className="h-5 w-5 bg-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
