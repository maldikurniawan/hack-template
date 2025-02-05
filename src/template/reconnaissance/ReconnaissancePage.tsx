import DomainInfo from './Sub/DomainInfo'
import DomainRecords from './Sub/DomainRecords'
import SubDomain from './Sub/SubDomain'

const ReconnaissancePage = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                <DomainInfo />
                <DomainRecords />
                <SubDomain />
            </div>
        </div>
    )
}

export default ReconnaissancePage