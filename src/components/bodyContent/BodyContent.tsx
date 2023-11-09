import { ICategory, IDua } from "@/types";
import CategoryDetails from "../categoryDetais/CategoryDetails";
import { baseUrl } from "@/config";

export default async function BodyContent() {
    const response = await fetch(`${baseUrl}/dua`);
    const data = await response.json();

    return (

        <div className="flex flex-col gap-4">
            {
                data?.data.map((item: IDua) => <CategoryDetails key={item.id} data={item} />)
            }
        </div>

    );
}

