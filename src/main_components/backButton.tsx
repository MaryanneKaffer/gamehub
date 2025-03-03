import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <Button className="absolute text-sm bottom-4 left-4 md:w-[200px] md:h-[50px]" radius="full" color="danger" variant="light" onPress={() => navigate("/")}>
            <IoIosArrowBack />
            <span className="hidden md:block">Back to GameHub</span>
        </Button>
    );
}