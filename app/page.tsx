'use client';

import { useState } from 'react';
import { Button, Form, InputNumber } from 'antd';
import { ConfigProvider, theme } from 'antd';

export default function Home() {
	const A_GRADE = 93;

	const [grade, setGrade] = useState<number | null>(null);
	const [neededFinalGrade, setNeededFinalGrade] = useState<number | null>(null);

	const onFinish = (values: any) => {
		console.log('Success:', values);
		let {
			ic1,
			ic2,
			ic3,
			ic4,
			ic5,
			ic6,
			ic7,
			ic8,
			ic9,
			ic10,
			hw1,
			hw2,
			hw3,
			me,
			fe,
			p2mt,
			pm,
			pmc,
			extra,
		} = values;
		extra += 2;

		const inClass =
			(ic1 + ic2 + ic3 + ic4 + ic5 + ic6 + ic7 + ic8 + ic9 + ic10) * 0.01;
		const hw = (hw1 + hw2 + hw3) * 0.05;
		const project = (p2mt + pm + pmc) * 0.05;
		const midterm = me * 0.2;
		const final = fe * 0.35;
		const total = inClass + hw + project + midterm + final + extra;

		const neededFinal =
			(A_GRADE - (inClass + hw + project + midterm)) / 0.35 - extra;
		console.log({ inClass, hw, project, midterm, final, total, neededFinal });

		setGrade(total);
		setNeededFinalGrade(neededFinal);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
			}}
		>
			<main className='flex min-h-screen flex-col items-center justify-between p-24'>
				<div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
					<p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
						Calculate your Refactoring grade!
					</p>
				</div>

				<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
					<Form
						name='basic'
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete='off'
					>
						<Form.Item
							label='Metrics Workshop'
							name='ic1'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Quality Workshop'
							name='ic2'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Code Smell Workshop'
							name='ic3'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='High Cohesion Low Coupling In-Class Exercise'
							name='ic4'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Paper Analysis Inclass Exercise'
							name='ic5'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Refactoring Workshop'
							name='ic6'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Research Survey'
							name='ic7'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Code Smell In-class Exercise'
							name='ic8'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Design Pattern Inclass Exercise'
							name='ic9'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Pre-Course Survey'
							name='ic10'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Homework 1'
							name='hw1'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Homework 2'
							name='hw2'
							rules={[{ required: true }]}
							initialValue={200}
						>
							<InputNumber min={0} max={200} defaultValue={200} />
						</Form.Item>

						<Form.Item
							label='Homework 3'
							name='hw3'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='2 Minutes Talk'
							name='p2mt'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Midpoint Check'
							name='pmc'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Presentation'
							name='pm'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Midterm Exam'
							name='me'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Final Exam'
							name='fe'
							rules={[{ required: true }]}
							initialValue={100}
						>
							<InputNumber min={0} max={100} />
						</Form.Item>

						<Form.Item
							label='Explanation of Refactoring Technique from Research Papers'
							name='extra'
							rules={[{ required: true }]}
							initialValue={0}
						>
							<InputNumber min={0} max={2} />
						</Form.Item>

						<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
							<Button type='primary' htmlType='submit'>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
				<div>
					{grade ? (
						<p className='text-2xl font-bold text-center'>
							Your Refactoring grade is: {Math.round(grade * 100) / 100}%
						</p>
					) : null}

					{neededFinalGrade ? (
						<p className='font-bold text-center'>
							You&apos;ll need at least a{' '}
							{Math.round(neededFinalGrade * 100) / 100}% on the final exam to
							get an A overall.
							{neededFinalGrade > 95 ? (
								<>
									<br />
									<span>Good luck?? 😭</span>
								</>
							) : null}
						</p>
					) : null}
				</div>
			</main>
		</ConfigProvider>
	);
}
