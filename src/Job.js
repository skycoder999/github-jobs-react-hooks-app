import React, {useState, useEffect} from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export default function Job({ job }) {
    const [open, setOpen] = useState(false)

    return (
        <Card className="mt-4 mb-4">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                        {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        {job.type === "Part Time" && <Badge variant="primary mr-2">{job.type}</Badge> }
                        {job.type === "Full Time" && <Badge variant="success mr-2">{job.type}</Badge> }
                        <Badge variant="secondary" className="mb-2">{job.location}</Badge>
                        <div style={{ wordBreak: 'break-all'}}>
                            <ReactMarkdown source={job.how_to_apply}/>
                        </div>
                    </div>
                    <img className="d-none d-md-inline-block float-right mt-0" height="50" width="150" src={job.company_logo} alt={job.company} />
                </div>
               <Card.Text>
                <Button variant="primary"
                 onClick={() => setOpen(prevOpen => !prevOpen)}
                >
                {!open ? 'View Details' : 'Hide Details'}
                </Button>
               </Card.Text>
               <Collapse in={open}>
               <div className="mt-4">
                   <ReactMarkdown source={job.description} />
               </div>
               </Collapse>
            </Card.Body>
        </Card>
    )
}
