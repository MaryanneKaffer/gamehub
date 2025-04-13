import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <Button className="absolute text-sm min-w-[10px] w-[50px] !important bottom-4 h-[30px] left-4 lg:w-[200px] lg:h-[50px]" radius="full" color="danger" variant="flat" onPress={() => navigate("/")}>
            <IoIosArrowBack />
            <p className="hidden md:block">Back to GameHub</p>
        </Button>
    );
}