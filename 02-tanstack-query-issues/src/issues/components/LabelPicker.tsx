import LoadingSpinner from "../../shared/components/LoadingSpinner";
import { useLabels } from "../hooks";

interface Props{
  onLabelSelected: (label: string) => void;
  selectedLabels: string[];
}

export const LabelPicker = ({selectedLabels, onLabelSelected}: Props) => {

  const { labelsQuery } = useLabels();


  if(labelsQuery.isLoading){
    return (
      <div className="flex justify-center items-center h-52">
        <LoadingSpinner/>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {labelsQuery.data?.map(label => (
        <span
        onClick={() => onLabelSelected(label.name)}
        key={label.id}
        className={
          `selected-label animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer
            ${selectedLabels.includes(label.name) && 'bg-slate-800'}
          `}
        style={{ border: `1px solid #${label.color}`, color: '#ffccd3' }}
      >
        {label.name}
      </span>
      ))}
    </div>
  );
};
