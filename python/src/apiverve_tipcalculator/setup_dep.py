from setuptools import setup, find_packages

setup(
    name='apiverve_tipcalculator',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Tip Calculator computes tips and splits bill totals across group members. Pass a pre-tip bill amount, tip percentage, and group size to get the tip total, overall cost, and individual per-person shares.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/tipcalculator?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
