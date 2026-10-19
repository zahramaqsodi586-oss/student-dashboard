

function StatusCard(props){



  return(
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex item justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {props.title}
          </p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">{props.value}</h3>
          <p className="mt-2 text-xs text-slate-500">{props.description}</p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
          {props.icon}

        </div>

      </div>
      </div>
  )
}

export default StatusCard;