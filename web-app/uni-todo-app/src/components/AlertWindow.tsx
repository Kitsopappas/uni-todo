import {ReactComponent as AlertIcon} from '../svgs/alertIcon.svg';

interface AlertWindowProps {
    message: string;
    details?: string;
}

export const AlertWindow = ({message, details}: AlertWindowProps) => {
  return(
    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
      <div className="flex items-center">
        <div className="py-1">
          <AlertIcon className="fill-current h-6 w-6 text-teal-500 mr-4" />
        </div>
        <div>
          <p className="text-sm font-bold">{message}</p>
          <p className="text-sm">{details}</p>
        </div>
      </div>
    </div>
  );
}
