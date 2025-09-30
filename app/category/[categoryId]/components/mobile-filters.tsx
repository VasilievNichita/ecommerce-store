"use client";

import Button from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
};

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    return (
        <>
        <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
            Filters
            <Plus size={20}/>
        </Button>

        <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-xs bg-white p-6 shadow-xl">
                            <div className="mb-4 flex items-center justify-between">
                                <Dialog.Title className="text-lg font-semibold">Filters</Dialog.Title>
                                <Button onClick={onClose}>Close</Button>
                            </div>
                            <div className="space-y-6">
                                <Filter name="Sizes" valueKey="sizeId" data={sizes} />
                                <Filter name="Colors" valueKey="colorId" data={colors} />
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </div>
        </Dialog>
        </>
    );
}
export default MobileFilters;