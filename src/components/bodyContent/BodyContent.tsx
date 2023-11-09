import { ICategory, IDua } from "@/types";
import { baseUrl } from "@/config";
import BodyDetails from "../categoryDetais/BodyDetails";

export default async function BodyContent() {
    const response = await fetch(`${baseUrl}/dua`);
    const data = await response.json();

    return (

        <div className="flex flex-col gap-4">
            {
                data?.data.map((item: IDua) => <BodyDetails key={item.id} data={item} />)
            }
        </div>

    );
}

