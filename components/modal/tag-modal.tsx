"use client"
import {useState} from "react";
import {X} from "lucide-react";
import {Toggle} from "@/components/ui/toggle";
import {useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";
import {Modal} from "@/components/modal/modal";

interface TagModalProps {
    isOpen: boolean
    onClose: () => void
    tags: string[]
}

const TagModal = ({isOpen, onClose, tags}: TagModalProps) => {
    const [currentTags, setCurrentTags] = useState<string[]>(tags);
    const router = useRouter()

    const updateTags = async (newTags: String[]) => {
        const update = await fetch('/api/tag', {
            method: "PUT",
            body: JSON.stringify(newTags)
        })
        if (update.ok) {
            //toast
            router.refresh()
        } else {
            //toast
        }
    }

    const handleInputChange = (index: number, value: string) => {
        setCurrentTags(prevTags => {
            const newTags = [...prevTags];
            newTags[index] = value;
            return newTags;
        });
    }
    const handleDeleteTag = (index: number) => {
        setCurrentTags(prevTags => {
            const newTags = [...prevTags];
            newTags.splice(index, 1);
            return newTags;
        });
    }

    const handleOnSubmit = () => {
        setCurrentTags([...currentTags, '']);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="标签"
        >
            <div className="space-y-6 h-96 pt-2 px-2 overflow-y-auto pr-4">
                {currentTags.length ?
                    currentTags.map((item, index) => (
                        <div className={'flex items-center'} key={index}>
                            <Input value={currentTags[index]}
                                   onChange={(e) => handleInputChange(index, e.target.value)}/>
                            <Toggle pressed={false} size={"sm"}>
                                <X onClick={() => {
                                    handleDeleteTag(index)
                                }}/>
                            </Toggle>
                        </div>
                    )) :
                    <div className={'flex justify-center items-center h-full'}>暂无标签...</div>}
            </div>
        </Modal>
    );
};
export default TagModal